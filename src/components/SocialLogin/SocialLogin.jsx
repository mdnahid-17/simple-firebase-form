import useAuth from "../../hooks/useAuth";

const SocialLogin = () => {

    const { googleLogin,githubLogin,facebookLogin,twitterLogin } = useAuth();


    return (
        <div className="flex justify-around py-8">
            <button onClick={googleLogin} className="btn border-primary hover:bg-gradient-to-r from-cyan-500 to-blue-500 text-xl font-bold">Google</button>
            <button onClick={githubLogin} className="btn border-primary hover:bg-gradient-to-r from-cyan-500 to-blue-500 text-xl font-bold">Github</button>
            <button onClick={facebookLogin} className="btn border-primary hover:bg-gradient-to-r from-cyan-500 to-blue-500 text-xl font-bold">Facebook</button>
            <button onClick={twitterLogin} className="btn border-primary hover:bg-gradient-to-r from-cyan-500 to-blue-500 text-xl font-bold">Twitter</button>
        </div>
    );
};

export default SocialLogin;