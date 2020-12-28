import Layout from '@/.current_theme/Layout';
import { getPageProps } from '@/helpers/get-page-props';

export default function Post({ params }) {
	return (
		<Layout>
			This is post page: {JSON.stringify(params)}
		</Layout>
	)
}

export const getServerSideProps = async (props) => {
	return {
		props: getPageProps(props)
	}
}
