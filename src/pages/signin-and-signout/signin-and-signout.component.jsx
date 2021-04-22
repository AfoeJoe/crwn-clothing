import SignIn from '../../components/sign-in/sigin-in.component'
import SignUp from '../../components/sign-up/SignUp-component'
import './signin-and-signout.styles.scss'

const SignInOut = ()=>{
    return (<div className='sign-in-and-sign-out'>
        <SignIn/>
        <SignUp/>
    </div>)
}
export default SignInOut;