## Apollo Shared UI is a mobile-first, atomic based component library for building a consistent design system across android and iOS

### Built With
* [React Native@0.68](https://reactnative.dev/blog/2022/03/30/version-068)
* [React Native Builder Bob](https://github.com/callstack/react-native-builder-bob)
* [Typescript](https://www.typescriptlang.org/)

### Inspired by
* [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)

### Installation

1. Clone the repo
   ```sh
   npm i @apollo/shared
   ```
2. The below packages needs to be included in the project, because some components use those internally.

   ```sh
    npm i react-native-device-info
          styled-components
          @react-navigation/native
   ```

   Packages that include native code should be linked. In most cases, using `pod install`. For more information, please refer to exact package docs.

### Commits format

Commitlint is used to check if your commit messages meet the [conventional commit format](https://conventionalcommits.org).

In general the pattern mostly looks like this:

```sh
type(scope?): subject
```

Real world examples can look like this:

```
chore: run tests on travis ci
```

```
fix(stepper): update button actions
```

```
feat(passenger): add comment section
```

Common types according to [commitlint-config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional#type-enum) can be:

- build
- ci
- chore
- docs
- feat
- fix
- perf
- refactor
- revert
- style
- test
