import ResetPasswordComponent from '@/components/ResetPasswordComponent'
import { getUserIgreja } from '@/lib/getUserIgreja'

export default function ResetPassword() {
  const userIgreja = getUserIgreja()
  return <ResetPasswordComponent userIgreja={userIgreja} />
}
