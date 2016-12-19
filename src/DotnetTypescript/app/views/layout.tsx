import * as React from 'react';
export class Layout extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
	}
	static propTypes = {
		title: React.PropTypes.string
	}
	render() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
}