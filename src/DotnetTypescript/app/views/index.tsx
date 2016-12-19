import * as React from 'react';
import { Layout } from './layout'
class Index extends React.Component<any, any> {

	constructor(props: any) {
		super(props);
	}
	static propTypes = {
		title: React.PropTypes.string
	}
	render() {
		return (
			<Layout>
                <h2>Rendered Server-side!</h2>
				<div className="app-top" id="app"></div>
			</Layout>
		);
	}
}

export = Index;