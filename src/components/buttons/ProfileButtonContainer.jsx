import { ProfileButton } from "./ProfileButton"

export const ProfileButtonContainer = () => {

  const texts = [
    { name: 'GitHub', url: 'https://es.linkedin.com/in/israel-duran-rodriguez-984a48176' },
    { name: 'LinkedIn', url: '' },
    { name: 'Twiter', url: '' },
    { name: 'Instagram', url: 'https://www.instagram.com/israelduran1/' },
    { name: 'Facebook', url: 'https://www.facebook.com/israel.duranrodriguez' }
  ]

  return (
    <div className="profile-button-container">
      {
        texts.map(({ name, url }) => <ProfileButton key={name} text={name} url={url} />)
      }
    </div>
  )
}
