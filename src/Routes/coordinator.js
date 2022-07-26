export const goToBack = (navigate) => {
  navigate(-1)
}

export const goToLogin = (navigate) => {
  navigate('/')
}

export const goTosingUp = (navigate) => {
  navigate('/singUp')
}

export const goToSingUpAdress = (navigate) => {
  navigate('/singUp/adress')
}

export const goToFeed = (navigate) => {
  navigate('/feed')
}

export const goToRestaurant = (navigate, id) => {
  navigate(`/feed/${id}`)
}

export const goToprofile = (navigate) => {
  navigate('/profile')
}

export const goToProfileEdit = (navigate, id) => {
  navigate(`/profile/${id}`)
}

export const goTocart = (navigate) => {
  navigate('/cart')
}
