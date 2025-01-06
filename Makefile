clean:
	@echo "Cleaning up files..."
	@find . -maxdepth 1 ! -name 'website' ! -name 'Makefile' ! -name '.gitignore' ! -name '.git' ! -name '.' -exec rm -r {} +
	@echo "Clean complete!"

build:
	@echo "Building website"
	@cd website && npm run build
	@echo "Building website complete!"
	@echo "Copying website files"
	@cp -r website/build/. .
	@echo "Copying website files complete!"
	@echo "Removing website/build directory"
	@rm -r website/build
	@echo "Remove website/build directory complete!"