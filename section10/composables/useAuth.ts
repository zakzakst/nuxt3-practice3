const useAuth = () => {
  const user = useState('use', () => null)
  const router = useRouter()
  const { supabase } = useSupabase()

  supabase.auth.onAuthStateChange((e, session) => {
    user.value = session?.user || null
  })

  const signUp = async ({email, password, ...metadata}) => {
    const {user: u, error} = await supabase.auth.signUp({
      email,
      password,
    }, {
      data: metadata,
      redirectTo: `${window.location.origin}/profile?source=email`
    });
    if (error) throw error
    return u
  }

  const signIn = async () => {
    const { user: u, error } = await supabase.auth.signInWithOAuth({
      email,
      password,
    })
    if (error) throw error;
    return u;
  }

  const signOut = async() => {
    const {error} = await supabase.auth.signOut()
    if (error) throw error;
    router.push('/')
  }

  const isLoggedIn = () => {
    return !!user.value
  }

  return {
    user,
    signUp,
    signIn,
    signOut,
    isLoggedIn,
  }
}

export default useAuth