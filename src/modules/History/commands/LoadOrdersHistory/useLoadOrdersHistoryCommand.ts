import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { tradesHistoryActions } from '~/store/TradesHistory/slice';

export const useLoadOrdersHistoryCommand = () => {
  const dispatch = useDispatch();

  return useCallback((startTime: number, endTime: number, date: string) => {
    dispatch(tradesHistoryActions.loadOrdersHistory({ endTime, startTime, offset: 0, date }));
  }, []);
};
