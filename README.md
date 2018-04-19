# ReplacEmoji

## Easily and safely replace Unicode emojis with any image!

[demo](https://banjerr.github.io/replacemoji-demo/)

### How it works

- Install the React component with npm via `npm install --save replacemoji`
- Pass an array of object(s) to the `replacements` prop, containing two properties (`searchFor` and `replaceWith`); both being strings

```const replacementArray = [
  {
    searchFor: '💩',
    replaceWith: 'https://i.gifer.com/1E2h.gif'
  },
  {
    searchFor: '😺',
    replaceWith: 'http://myfirstchat.com/bookcity2/profile10/1f701f42db7761e2d0f70c7feceb946ea91c51f4.gif'
  }
]

...

<ReplacEmoji replacements={}>Some text with a Unicode emoji 😺</ReplacEmoji>```