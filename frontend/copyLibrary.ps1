# Copy the Library Files to new folders
# For now its just JS files, not real library files
Copy-Item -path "./src/Library" -Destination "./src/orderForm/js" -Recurse -Force
Copy-Item -path "./src/Library" -Destination "./src/designForm/js" -Recurse -Force
Copy-Item -path "./src/Library" -Destination "./src/orderReview/js" -Recurse -Force
Copy-Item -path "./src/Library" -Destination "./src/js" -Recurse -Force
