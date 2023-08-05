# Copy the Library Files to new folders
# For now its just JS files, not real library files
Copy-Item -path "./src/Library" -Destination "./src/orderForm/js/Library" -Recurse -Force
Copy-Item -path "./src/Library" -Destination "./src/designForm/js/Library" -Recurse -Force
Copy-Item -path "./src/Library" -Destination "./src/orderReview/js/Library" -Recurse -Force
Copy-Item -path "./src/Library" -Destination "./src/page2/js/Library" -Recurse -Force
Copy-Item -path "./src/Library" -Destination "./src/js/Library" -Recurse -Force
