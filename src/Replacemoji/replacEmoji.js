import React from 'react'
import css from './index.css'

class ReplaceEmoji extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			replacements: []
		}

		this.emojiSearcher = this.emojiSearcher.bind(this)
		this.emojiReplacer = this.emojiReplacer.bind(this)
	}

	componentWillMount() {
		if (!this.props.replacements || !Array.isArray(this.props.replacements)) return console.error('Replacement prop should be an array!')

		let replacementArray = []

		this.props.replacements.map((replacement) => {
			if (typeof replacement !== 'object') return console.error('Replacements prop should be an array of objects!')

			replacementArray.push(replacement)
		})

		this.setState({replacements: replacementArray})
	}

	emojiSearcher(text) {
		if (!this.props.replacements || !Array.isArray(this.props.replacements)) return console.error('Replacement prop should be an array!')

		return this.state.replacements.map((replacement) => {
			let regEx = new RegExp(replacement.searchFor, 'g')

			return regEx.test(text) ? this.emojiReplacer(text, replacement, regEx) : null
		}).join('')
	}

	emojiReplacer(text, replacement, regEx) {
		// TODO add stuff to adjust size of image
		let replacementString = `<span class="replacemoji-span" style="background: url(${replacement.replaceWith});"><span class="oldEmoji" role="img" aria-label="emoji">${replacement.searchFor}</span></span>`

		return text.replace(regEx, replacementString)
	}

	render() {		
		return (
			<span dangerouslySetInnerHTML={{__html: this.emojiSearcher(this.props.children)}}></span>			
		)
	}
}

export default ReplaceEmoji