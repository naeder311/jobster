import customFetch from '../../utils/axios';
import { checkForAuthorizedResponse } from '../../utils/axios';

export const getAllJobsThunk = async (_, thunkAPI) => {
  const { search, sort, searchType, searchStatus, page } =
    thunkAPI.getState().allJobs;
  let url = `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}& page=${page}`;
  if (search) {
    url = url + `&search=${search}`;
  }

  try {
    const resp = await customFetch.get(url, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });
    return resp.data;
  } catch (error) {
    return checkForAuthorizedResponse(error, thunkAPI);
  }
};

export const showStatsThunk = async (_, thunkAPI) => {
  try {
    const resp = await customFetch.get('/jobs/stats');
    console.log(resp.data);
    return resp.data;
  } catch (error) {
    return checkForAuthorizedResponse(error, thunkAPI);
  }
};
