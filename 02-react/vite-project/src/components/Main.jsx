import "./Main.css";

const Main = () => {
    const number = 10;
    const user = {
        name: "이정환",
        isLogin: true,
    }
    
    if(user.isLogin) {
        return <div className="logout">로그아웃</div>
    } else {
        return <div>로그인</div>
    }
    
    // return (
    //     <>
    //         {user.isLogin? (
    //             <div>로그 아웃</div>
    //         ) : (
    //             <div>로그인</div>
    //         )}
    //     </>
    // )
}
export default Main;