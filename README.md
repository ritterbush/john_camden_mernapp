<p align="center"><img  src="https://github.com/jcamden/MERN-monorepo-boilerplate/blob/master/monorepo.png" /></p>
<h1 align="center">MERN-monorepo-boilerplate</h1>

_Well, sir, there's nothing on earth_  
_Like a genuine, bona fide_  
_Electrified, three-package monorepo._

This repo is a(n evolving) template for how I like to do things. This README provides information about the structure of repository and root-level commands, and also some notes on my preferred standards and packages.

## Workspace

##### [yarn](https://yarnpkg.com/) - [lerna](https://github.com/lerna/lerna) - [typescript](https://www.typescriptlang.org/)

### Project-wide Specifications:

[Terrifically Simple JSON](https://github.com/mpnally/Terrifically-Simple-JSON)<sup> [see also 1]</sup>

Tritypical [Semantic Versioning](http://semver.org/):

- Format Versioning (versions of API requests)<sup>[1, 2]</sup>
- Entity Versioning (versions of API entities)<sup>[1, 2]</sup>
- Historical Versioning (recovery (or undo) versions of API entities)<sup>[1, 3]</sup>

<sub> 1. [Designing Quality APIs (Cloud Next '18)](https://www.youtube.com/watch?v=P0a7PwRNLVU&t=27s)</sub>  
<sub> 2. [API design: Which version of versioning is right for you?](https://cloud.google.com/blog/products/gcp/api-design-which-version-of-versioning-is-right-for-you)</sub>  
<sub> 3. [Historical Versions Explained](https://spideroak.support/hc/en-us/articles/115002157643-Historical-Versions-Explained) </sub>

## Packages

### @my-org/server

##### [node](https://nodejs.org/en/) - [express](https://expressjs.com/) - [cors](https://github.com/expressjs/cors) - [mongoose](https://mongoosejs.com/) - [apidoc](https://apidocjs.com/)

[API Documentation](https://github.com/jcamden/MERN-Storybook-Workspaces-monorepo-boilerplate/tree/master/packages/server/doc)<sup> [to-do: docs --> Github Pages]</sup>  
[Server Documentation](https://github.com/jcamden/djinndex-monorepo/blob/master/packages/server/README.md)

#### Specifications

[GraphAPI](https://developers.facebook.com/docs/graph-api/overview/)-style architecture

- nodes — basically individual objects, such as a User, a Project, a Page, or a Match
- edges — connections between a collection of objects and a single object, such as Projects per User, Pages per Project, or Entries per page.
- fields — data about an object, such as a Project's name or a Match's entry.

### @my-org/lib:

##### [storybook](https://storybook.js.org/)

[Documentation](https://github.com/jcamden/djinndex-monorepo/blob/master/packages/lib/README.md)

#### Specifications

[Atomic web Design](https://bradfrost.com/blog/post/atomic-web-design/)
@my-app/lib/components

- /atoms
- /molecules
- /organisms
- /templates
- /views (pages)

[React UI Testing with Storybook](https://storybook.js.org/docs/testing/react-ui-testing/)  
see especially:

- [Structural Testing with StoryShots](https://storybook.js.org/docs/testing/structural-testing)
- [Interaction Testing with Specs Addon](https://storybook.js.org/docs/testing/interaction-testing)

### @my-org/client:

##### [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html) - [jest-dom](https://testing-library.com/docs/ecosystem-jest-dom) - [react-testing-library](https://testing-library.com/docs/react-testing-library/intro)<sup> [pss. obsolete vis-a-vis Storybook testing]</sup>

[Documentation](https://github.com/jcamden/djinndex-monorepo/blob/master/packages/client/README.md)

## Getting Started

### Prerequisites:

##### [Node](https://nodejs.org/en/) - [Yarn](https://yarnpkg.com/)

### Installing

First, update package names in all package.jsons and in all imports. Then, in the root directory, run

    Yarn

If you need to change the names of the packages later. Delete your root directory node_modules, yarn.lock, and rerun

    Yarn

### Scripts

#### Root Directory Lerna Scripts

To run Storybook (@my-app/lib)

    "story": "lerna run story --stream",

To build @my-app/lib:

    "prestart": "lerna run libbuild --stream",

To build @my-app/lib and run @my-app/client and @my-app/server

    "start": "lerna run start --stream",

#### Root Directory Single-package Script

Self-explanatory:

    "start:client": "yarn --cwd packages/client start",
    "start:server": "yarn --cwd packages/server start",
    "add:client": "yarn --cwd packages/client add",
    "add:server": "yarn --cwd packages/server add",
    "add:lib": "yarn --cwd packages/lib add",
    "remove:client": "yarn --cwd packages/client remove",
    "remove:server": "yarn --cwd packages/server remove",
    "remove:lib": "yarn --cwd packages/lib remove"

## Deployment

I don't have any idea of how to deploy anything at all.

## Contributing

Make a request.

## Authors

- [jcamden](https://github.com/jcamden)

## License

MIT

## Acknowledgments

God
