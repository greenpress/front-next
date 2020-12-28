import Layout from '@/.current_theme/Layout';
import { getPageProps } from '@/helpers/get-page-props';

export default function Search({ params }) {
	return (
		<Layout>
			This is search page: {JSON.stringify(params)}
		</Layout>
	)
}

export const getServerSideProps = async (props) => {
	return {
		props: getPageProps(props)
	}
}
