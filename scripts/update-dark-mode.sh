#!/bin/bash

# This script adds dark mode classes to common patterns in components

cd "/Users/chris/Desktop/Claude Workspace/nr-geo/src/components"

# Update Markets.jsx
sed -i '' 's/className="section-padding bg-white"/className="section-padding bg-white dark:bg-dark-800"/g' Markets.jsx
sed -i '' 's/text-dark-700\([^-]\)/text-dark-700 dark:text-dark-50\1/g' Markets.jsx
sed -i '' 's/text-dark-500\([^-]\)/text-dark-500 dark:text-dark-200\1/g' Markets.jsx
sed -i '' 's/bg-white\([^/-]\)/bg-white dark:bg-dark-700\1/g' Markets.jsx

# Update Projects.jsx
sed -i '' 's/bg-gradient-to-b from-white to-dark-50/bg-gradient-to-b from-white to-dark-50 dark:from-dark-900 dark:to-dark-800/g' Projects.jsx

# Update Contact.jsx
sed -i '' 's/section-padding bg-white"/section-padding bg-white dark:bg-dark-800"/g' Contact.jsx

echo "Dark mode classes added to components"
