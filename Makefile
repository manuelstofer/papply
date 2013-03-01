install:
	@npm install

build: install
	@echo build ...
	@./node_modules/.bin/component-build

test: install
	@echo test
	@./node_modules/.bin/mocha \
		--require chai \
		--reporter spec

	@echo test in browser
	@./node_modules/mocha-phantomjs/bin/mocha-phantomjs test/test-runner.html

.PHONY: test build
