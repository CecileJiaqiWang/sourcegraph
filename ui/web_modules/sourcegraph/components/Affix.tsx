// tslint:disable: typedef ordered-imports

import * as React from "react";

type Props = {
	className?: string,
	style?: any,
	children?: any,
	offset?: number,
};

export class Affix extends React.Component<Props, any> {
	_affix: {
		offsetTop: number,
		style: any,
	};

	componentDidMount() {
		const initialOffset = this._getOffset();
		window.addEventListener("scroll", () => this._affixEl(initialOffset));
	}

	componentWillUnmount() {
		const initialOffset = this._getOffset();
		window.removeEventListener("scroll", () => this._affixEl(initialOffset));
	}

	_getOffset(): number {
		return this._affix.offsetTop;
	}

	_affixEl(initialOffset: number): any {
		if (!this._affix) {
			return;
		}
		if (initialOffset <= window.scrollY) {
			this._affix.style.position = "fixed";
			this._affix.style.top = `${this.props.offset}px`;
		} else if (initialOffset > window.scrollY) {
			this._affix.style.position = "relative";
		}
	}

	render(): JSX.Element | null {
		const {className, style, children} = this.props;
		return (
			<div className={className} style={style}>
				<div ref={(el) => this._affix = el}>{children}</div>
			</div>
		);
	}
}
