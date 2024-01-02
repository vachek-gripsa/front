import axios from 'axios';
import { Form, redirect } from 'react-router-dom';

interface MyRequest {
  request: {
    formData: () => Promise<FormData>;
  };
}

export default function RegistrationForm() {
  const textareaClass =
    'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';

  const labelClass = 'block mb-2 text-sm font-medium text-gray-900 dark:text-white';

  return (
    <>
      <Form method="post" className="max-w-sm mx-auto">
        <p className="mb-5">
          <label htmlFor="firstName" className={`${labelClass}`}>
            first Name
          </label>
          <textarea
            name="firstName"
            id="firstName"
            rows={1}
            className={`${textareaClass}`}
            required
          />
        </p>
        <p className="mb-5">
          <label htmlFor="lastName" className={`${labelClass}`}>
            last Name
          </label>
          <textarea
            name="lastName"
            id="lastName"
            rows={1}
            className={`${textareaClass}`}
            required
          />
        </p>
        <p className="mb-5">
          <label htmlFor="email" className={`${labelClass}`}>
            Your E-mail
          </label>
          <textarea name="email" id="email" rows={1} className={`${textareaClass}`} required />
        </p>
        <p className="mb-5">
          <label htmlFor="password" className={`${labelClass}`}>
            Password
          </label>
          <textarea
            name="password"
            id="password"
            rows={1}
            className={`${textareaClass}`}
            required
          />
        </p>
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Submit
        </button>
      </Form>
    </>
  );
}

export async function action({ request }: MyRequest) {
  // console.log(request, params);
  const formData = await request.formData();
  // console.log(formData.get('password')) //  method that can provide required field
  const postData = Object.fromEntries(formData); // {name:'...', nick:'...'}
  console.log(postData);

  await axios
    .post('http://localhost:4444/api/auth/sign-up', postData)
    .then(result => console.log(result));
  //  required backend to post data
  // await fetch('//localhost:4444/api/auth/sign-up', {
  //   method: 'post',
  //   body: JSON.stringify(postData),
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // });

  // return redirect('/');

  return null;
}
