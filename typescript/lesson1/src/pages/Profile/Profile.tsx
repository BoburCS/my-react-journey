type ProfileProps = {
    UserInfo: {
        firstName: string;
        lastName?: string;
        age: number;
        isStudent: boolean;
    }
}

function Profile(props: ProfileProps) {
    return (
        <div>
            <h1>Welcome to your profile {props.UserInfo.firstName}</h1>
        </div>
    );
}

export default Profile;
