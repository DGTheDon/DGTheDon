import { getSession } from "next-auth/client";

export async function requireAuth(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}

export async function withAuth(Component) {
  return function AuthenticatedComponent(props) {
    const { session } = props;
    if (!session) {
      return <Component {...props} />;
    }
    return (
      <>
        <Component {...props} />
      </>
    );
  };
}