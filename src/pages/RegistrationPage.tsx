import ReactHookFormSignIn from 'src/components/authentication/ReactHookFormSignIn';
import ReactHookFormSignUp from 'src/components/authentication/ReactHookFormSignUp';
import RegistrationForm from '../components/authentication/RegistrationForm';

export default function RegistrationPage() {
  return (
    <div>
      {/* <RegistrationForm /> */}
      {/* <br></br>
      <hr />
      <br></br> */}
      <ReactHookFormSignUp />
      <hr />
      <br></br> 

      <ReactHookFormSignIn />
    </div>
  );
}
