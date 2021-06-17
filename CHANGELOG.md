# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]
<!--
"### Added" for new features.
"### Changed" for changes in existing functionality.
"### Deprecated" for soon-to-be removed features.
"### Removed" for now removed features.
"### Fixed" for any bug fixes.
"### Security" in case of vulnerabilities.
-->


## [4.0.0] - 2020-06-17

### Changed
- [BREAKING] Upgraded the component to work with Angular 8
- [BREAKING] Replaced FontAwesome icons with all new Streamline icons
- [BREAKING] Upgraded to core branding v5

### Fixed
- WCAG: improved chatbot's alt title
- WCAG: improved screenreader support
- WCAG: refined ARIA live


## [3.0.0] - 2020-03-11

### Added
- [BREAKING] Made the chatbot widget WCAG 2.1 AA compliant.

### Fixed
- Fixed the way errors are shown.


## [2.3.0] - 2019-05-13

### Added
- Added support for actions outside the chatbot.


## [2.2.0] - 2019-03-13

### Added
- Added a persona to the chatbot that can be overridden by the user.

### Changed
- Changed the behaviour of the loading state.


## [2.1.2] - 2019-02-27

### Fixed
- Fixed a possible empty URL message.


## [2.1.1] - 2019-02-19

### Fixed
- Fixed unexpected exception when the chatbot engine responds with 403.
- Made sure that larger images always fit within the viewport width.


## [2.1.0] - 2019-01-28

### Added
- Added an option to override the width of a pinned chatbot.


## [2.0.3] - 2019-01-28

### Fixed
- Fixed an issue where words were unnecessary split in two.
- Fixed margin between reply buttons.


## [2.0.2] - 2019-01-28 - BORKED


## [2.0.1] - 2019-01-10

### Changed
- Upgraded the widget to be compatible with rxjs 6 without the use of rxjs-compat.


## [2.0.0] - 2018-11-19

### Changed
- [BREAKING] Upgraded the widget to work with Angular 6+.


## [1.1.3] - 2018-10-17

### Fixed
- Fixed the widget not showing quick replies anymore.


## [1.1.2] - 2018-09-26

### Changed
- Fixed the widget not being correctly initialized.


## [1.1.1] - 2018-08-20

### Fixed
- Fixed a borked release.


## [1.1.0] - 2018-08-20 - BORKED

### Added
- Send empty message on init to automatically activate chatbot.


## [1.0.0] - 2018-06-13
- Initial release.


[Unreleased]: https://github.com/digipolisantwerp/chatbot_widget_angular/compare/v3.0.0...HEAD
[3.0.0]: https://github.com/digipolisantwerp/chatbot_widget_angular/compare/v2.3.0...v3.0.0
[2.3.0]: https://github.com/digipolisantwerp/chatbot_widget_angular/compare/v2.2.0...v2.3.0
[2.2.0]: https://github.com/digipolisantwerp/chatbot_widget_angular/compare/v2.1.2...v2.2.0
[2.1.2]: https://github.com/digipolisantwerp/chatbot_widget_angular/compare/v2.1.1...v2.1.2
[2.1.1]: https://github.com/digipolisantwerp/chatbot_widget_angular/compare/v2.1.0...v2.1.1
[2.1.0]: https://github.com/digipolisantwerp/chatbot_widget_angular/compare/v2.0.3...v2.1.0
[2.0.3]: https://github.com/digipolisantwerp/chatbot_widget_angular/compare/v2.0.2...v2.0.3
[2.0.2]: https://github.com/digipolisantwerp/chatbot_widget_angular/compare/v2.0.1...v2.0.2
[2.0.1]: https://github.com/digipolisantwerp/chatbot_widget_angular/compare/v2.0.0...v2.0.1
[2.0.0]: https://github.com/digipolisantwerp/chatbot_widget_angular/compare/v1.1.3...v2.0.0
[1.1.3]: https://github.com/digipolisantwerp/chatbot_widget_angular/compare/v1.1.2...v1.1.3
[1.1.2]: https://github.com/digipolisantwerp/chatbot_widget_angular/compare/v1.1.1...v1.1.2
[1.1.1]: https://github.com/digipolisantwerp/chatbot_widget_angular/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/digipolisantwerp/chatbot_widget_angular/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/digipolisantwerp/chatbot_widget_angular/compare/v0.0.1...v1.0.0
