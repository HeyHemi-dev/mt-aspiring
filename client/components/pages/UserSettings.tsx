import { useForm } from 'react-hook-form'

function UserSettings() {
  return (
    <>
      <section className="site-padding section-padding">
        <div>
          <h1>User Settings</h1>
          <form>
            <input>username</input>
            <input>name</input>
            <input>account type</input>
            <button>Update Profile</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default UserSettings
