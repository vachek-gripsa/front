// import { Form, redirect } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';

type FormInput = {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function ReactHookForm() {
  const {
    register,
    handleSubmit,
    // watch,
    reset,
    getValues, // to check is password confirmed to password.
    // setError,
    formState: { 
      errors,
      //  isSubmitting // check current state during sending the
   }
  } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = async data => {
    const { firstName, lastName, userName, email, password } = data;
    const validObj = { firstName, lastName, userName, email, password };
    console.log(validObj);

    axios
      .post('http://localhost:4444/api/auth/sign-up', {
        firstName,
        lastName,
        userName,
        email,
        password
      })
      .then(result => console.log(result))
      .catch(err => console.log(err));

    // const response = await fetch('http://localhost:4444/api/auth/sign-up', {
    //   method: 'POST',
    //   // body: JSON.stringify(validObj),
    //   body: JSON.stringify(data),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // });
    // const responseData = await response.json();
    // console.log(responseData);

    // if (!response.ok) {
    //   alert(' Submitting form failed');
    //   return;
    // }

    // if (responseData.errors) {
    //   const errors = responseData.errors;

    //   if (errors.email) {
    //     setError('email', {
    //       type: 'server',
    //       message: errors.email
    //     });
    //   } else if (errors.password) {
    //     setError('password', {
    //       type: 'server',
    //       message: errors.password
    //     });
    //   } else if (errors.nick) {
    //     setError('nick', {
    //       type: 'server',
    //       message: errors.nick
    //     });
    //   } else if (errors.name) {
    //     setError('firstName', {
    //       type: 'server',
    //       message: errors.name
    //     });
    //   } else if (errors.lastName) {
    //     setError('lastName', {
    //       type: 'server',
    //       message: errors.name
    //     });
    //   } else {
    //     alert('Another error ');
    //   }
    // }

    reset({ password }); // reset assigned variables only
    // reset() // will reset form after submiting
  };
  // const emailValidation = /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
  const emailValidation = /^[\w-.]+@([\w-]+\.)+[\w-]{2,5}$/;

  const textareaClass =
    'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';

  const labelClass = 'block mb-2 text-sm font-medium text-gray-900 dark:text-white';

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto">
      <p className="mb-5">
        <label
          className={`${labelClass}`}
          // className='text-[2vw]'
        >
          First Name
        </label>
        {/* register your input into the hook by invoking the "register" function */}
        {/* include validation with required or other standard HTML validation rules */}
        <input
          type="text"
          {...register('firstName', { required: 'Please enter Name' })}
          className={`${textareaClass}`}
        />
        {/* errors will return when field validation fails  */}
        {errors.firstName && <span className="text-[red]">{errors.firstName.message}</span>}
      </p>
      <p className="mb-5">
        <label
          className={`${labelClass}`}
          // className='text-[2vw]'
        >
          Last Name
        </label>
        {/* register your input into the hook by invoking the "register" function */}
        {/* include validation with required or other standard HTML validation rules */}
        <input
          type="text"
          {...register('lastName', { required: 'Please enter Name' })}
          className={`${textareaClass}`}
        />
        {/* errors will return when field validation fails  */}
        {errors.lastName && <span className="text-[red]">{errors.lastName.message}</span>}
      </p>
      <p className="mb-5">
        <label className={`${labelClass}`}>User Name</label>
        <input
          type="text"
          {...register('userName', { required: 'Nick is required' })}
          className={`${textareaClass}`}
        />
        {errors.userName && <span className="text-[red]">{errors.userName.message}</span>}
      </p>
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
      <p className="mb-5">
        <label className={`${labelClass}`}>Confirm Password</label>
        <input
          type="text"
          {...register('confirmPassword', {
            required: 'password word must be same',
            validate: value => value === getValues('password') || 'Password must match'
          })}
          className={`${textareaClass}`}
        />
        {errors.confirmPassword && (
          <span className="text-[red]" role="alert">
            {errors.confirmPassword.message}
          </span>
        )}
      </p>
      <p>
        <button type="submit"></button>
      </p>
    </form>
  );
}
