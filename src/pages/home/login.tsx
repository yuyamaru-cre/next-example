import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import DefaultLayout from '@/components/layouts/DefaultLayout/DefaultLayout'

export default function Login() {

  const router = useRouter()

  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleChangeId = (event: any) => {
    setId(event.target.value);
  }
  const handleChangePassword = (event: any) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event: any) => {
    //TODO: ログイン処理完了後に画面遷移
    router.push('/home')
    event.preventDefault();
  }

  return (
    <>
      <DefaultLayout>
        <form className="box is-shadowless" onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">ID</label>
            <p className="control has-icons-left">
              <input className="input" type="text" placeholder="ID" value={id} onChange={handleChangeId} />
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <p className="control has-icons-left">
              <input className="input" type="password" placeholder="Password" value={password} onChange={handleChangePassword} />
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <input className="button is-dark" type="submit" value="ログイン" />
        </form>
      </DefaultLayout>
    </>
  )
}
