import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return  (
        <div>
            <div>
                <img src="https://wallpapercave.com/wp/wp2717700.jpg" alt="1" /></div>
            <div className={s.descriptionBlock}>
                ava+descr
            </div>
        </div>
    )
}
export default ProfileInfo;