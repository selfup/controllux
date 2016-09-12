# Controllux

### Now you can namespace your stores and actions with controllers:

1. you can now make your own controllers that handle different states
1. each controller has it's own defined actions (set by you)
1. this helps namespace the flux api for your application
1. you can call the state from any controller if you need it at any point in time
1. Uses and Exposes [Immutable JS](https://facebook.github.io/immutable-js/) so that one dependency is all that is needed to keep things immutable!

**This helps you make more restful application actions on namespaced stores, since you can now reuse the same action names on different controllers**

### Grabbing Immutable JS

***

To grab Immutable JS simply:

```javascript
const { imut } = Controllux
```

***

### Heads Up!

***

It is immutable by default, and follows the vanilla Redux example (which subscribes to a simple render function that replaces the innerHTML of a certain element)

This library will early return and log an error message if your actions return a mutable object!

***

### Example:

Here is an example on jsfiddle: https://jsfiddle.net/selfup/fq1k9vh4/

### Another Example:

Here is the example on **GitHub** pages (custom domain): http://selfup.me/controllux

Here is the example on **GitLab** pages: https://selfup.gitlab.io/controllux

Take a look a the index.html in this repo for reference
