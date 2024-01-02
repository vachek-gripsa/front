import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';

type FormInput = {
  email: string;
  password: string;
};

export default function ReactHookFormSignIn() {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting // track the current state during sending the
    }
  } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = async data => {
    const { email, password } = data;
    console.log(data);

    // axios
    //   .post('http://localhost:4444/api/auth/sign-in', {
    //     email,
    //     password
    //   })
    //   .then(result => console.log(result))
    //   .catch(err => console.log(err));

    try {
      const response = await axios.post(
        'http://localhost:4444/api/auth/sign-in',
        {
          email,
          password
        },
        // { withCredentials: true }
      );
      console.log(response);
    } catch (err) {
      console.log('Error - ', err.message);
    }
  };

  const textareaClass =
    'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';

  const labelClass = 'block mb-2 text-sm font-medium text-gray-900 dark:text-white';

  const emailValidation = /^[\w-.]+@([\w-]+\.)+[\w-]{2,5}$/;
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto">
        <p className="mb-5">
          <label className={`${labelClass}`}>E-mail</label>
          <input
            type="text"
            {...register('email', { required: true, pattern: emailValidation })}
            className={`${textareaClass}`}
          />
          {errors.email && <span className="text-[red]">{errors.email.message}</span>}
        </p>
        <p className="mb-5">
          <label className={`${labelClass}`}>Password1</label>
          <input
            type="text"
            {...register('password', {
              required: 'password required',
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters'
              }
            })}
            className={`${textareaClass}`}
          />
          {errors.password && (
            <span className="text-[red]" role="alert">
              {errors.password.message}
            </span>
          )}
        </p>
        <p>
          <button type="submit"></button>
        </p>
      </form>
    </>
  );
}
