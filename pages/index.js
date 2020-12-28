import Layout from '@/.current_theme/Layout';
import { getPageProps } from '@/helpers/get-page-props';

export default function Index() {
  return (
    <Layout>
	    This is index page
    </Layout>
  )
}

export const getServerSideProps = async (context) => {
	return {
		props: getPageProps(context)
	}
}
