import { useAppSelector, useAppDispatch } from '../hooks/reduxHooks';
import {
  fetchDataFromServer,
  selectFetched,
  // setFetchedData
} from 'src/redux/testFetchSlice/testSlice';

export default function FirstAction() {
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectFetched);

  const handleThunkFunction = () => {
    dispatch(fetchDataFromServer());
  };

  return (
    <div>
      <p> Data from server</p>
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        type="button"
        // onClick={fetchData}
        onClick={handleThunkFunction}
      >
        Fetch
      </button>
      <br />

      <span style={{ fontSize: '32px', color: 'red' }}>
        {data.map((element: any, index) => (
          <div key={index}>{element.message}</div>
        ))}
      </span>
    </div>
  );
}
