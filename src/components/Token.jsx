import Cookies from 'js-cookie'

export default function Token({ children }) {
  const token = Cookies.get('tokennn')
  return <div>{token && children}</div>
}
