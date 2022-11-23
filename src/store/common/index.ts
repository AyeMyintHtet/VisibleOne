import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { isPendingAction, isFulfilledAction, isRejectedAction } from '../typehandle.action'
import serviceController, { routes } from 'controller'
const initialState: any = {
    isLoading: false,
    Drawer:false
  }
  
  const Challenges:any = createAsyncThunk('commonSlice/Challenges', async ()=>{
    return await serviceController(routes.getchallenges)
    .then((res:any)=>{
      if(res){
        return res?.data
      }
    })
  })
  
  const commonSlice = createSlice({
    name: 'commonSlice',
    initialState,
    reducers: {
      Drawer:(state:any,action:any)=>{
        state.Drawer = !state.Drawer
      }
    },
    extraReducers: builder => {
      builder
        .addMatcher(isPendingAction('commonSlice/'), state => ({
          ...state,
          isLoading: true,
          error: null,
        }))
        .addMatcher(isFulfilledAction('commonSlice/'), (state, action) => {
          let tmp = action.type.split('/')
          return {
            ...state,
            [tmp[1] + '_data']: action.payload,
            isLoading: false,
            error: null,
          }
        })
        .addMatcher(isRejectedAction('commonSlice/'), (state, action) => ({
          ...state,
          isLoading: false,
          error: action.payload,
        }))
    },
  })

export default {
  commonSlice:commonSlice.reducer,
  Drawer:commonSlice.actions.Drawer,
  Challenges
}