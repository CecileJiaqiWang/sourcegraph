// tslint:disable: typedef ordered-imports

import * as React from "react";
import * as styles from "./styles/toggleSwitch.css";

type Props = {
	defaultChecked?: boolean,
	onChange: (checked: boolean) => void,
};

export class ToggleSwitch extends React.Component<Props, any> {
	static defaultProps = {
		defaultChecked: false,
	};

	state: {
		checked: boolean;
	} = {
		checked: false,
	};

	constructor(props) {
		super(props);
		this.state = {
			checked: props.defaultChecked,
		};
	}

	_toggle() {
		this.setState({checked: !this.state.checked}, () => this.props.onChange(this.state.checked));
	}

	render(): JSX.Element | null {
		return (
			<div className={styles.toggle} onClick={this._toggle.bind(this)}>
				<input type="checkbox" name="toggle" className={styles.toggle_checkbox} checked={this.state.checked} readOnly={true}/>
				<label className={styles.toggle_label}>
						<span className={styles.toggle_inner}></span>
						<span className={styles.toggle_switch}></span>
				</label>
			</div>
		);
	}
}
