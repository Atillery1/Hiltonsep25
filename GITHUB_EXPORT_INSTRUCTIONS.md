# GitHub Export Instructions

This document provides step-by-step instructions for exporting the Hilton Norfolk The Main Digital Concierge project from Replit to GitHub.

## Step 1: Download the Project

1. In Replit, click on the **three dots** (⋮) in the top-right corner of the interface
2. Select **Download as zip** from the dropdown menu
3. Save the ZIP file to your local computer

## Step 2: Extract and Clean the Project

1. Extract the downloaded ZIP file to a folder on your computer
2. Remove the following files and directories that should not be included in the GitHub repository:
   - `node_modules/` directory (372MB)
   - `.cache/` directory (8.4MB)
   - `.local/` directory (9.9MB)
   - `.upm/` directory
   - `attached_assets/` directory (1.5MB)
   - `generated-icon.png` file (528KB)
   - `.replit` file

## Step 3: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and log in to your account
2. Click on the **+** icon in the top-right corner and select **New repository**
3. Name your repository (e.g., `hilton-norfolk-digital-concierge`)
4. Add a description (optional): "A premium digital concierge platform for Hilton Norfolk The Main"
5. Choose whether to make the repository public or private
6. Do **not** initialize the repository with a README, .gitignore, or license (we'll add these ourselves)
7. Click **Create repository**

## Step 4: Upload the Project to GitHub

### Option A: Using GitHub Web Interface (for smaller projects)

1. In your newly created repository, click on the **uploading an existing file** link
2. Drag and drop the cleaned project files or use the file selector to upload them
3. Add a commit message like "Initial commit"
4. Click **Commit changes**

### Option B: Using Git Command Line (recommended)

1. Install Git if you haven't already ([git-scm.com](https://git-scm.com/))
2. Open a terminal/command prompt and navigate to the cleaned project directory
3. Initialize a Git repository and push to GitHub:

```bash
# Initialize a new Git repository
git init

# Add all files
git add .

# Commit the changes
git commit -m "Initial commit"

# Add the GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/hilton-norfolk-digital-concierge.git

# Push to GitHub
git push -u origin main
```

## Step 5: Verify Your Repository

1. Refresh your GitHub repository page
2. Ensure all files are properly uploaded
3. Check that the README.md is displaying correctly
4. Verify that none of the excluded files/directories were accidentally uploaded

## Notes

- The total size of the project without node_modules and other excluded directories should be much smaller (under 10MB)
- If you need to make changes to the project after uploading, you can clone the repository, make changes, and push them back to GitHub
- Consider adding GitHub Actions workflows for automated testing and deployment in the future

## Project Structure Reference

Here's what your GitHub repository structure should look like:

```
hilton-norfolk-digital-concierge/
├── client/                # Frontend React application
├── server/                # Backend Express server
├── shared/                # Shared types and schemas
├── .gitignore             # Git ignore file
├── drizzle.config.ts      # Drizzle ORM configuration
├── package.json           # Project dependencies and scripts
├── package-lock.json      # Locked dependencies
├── postcss.config.js      # PostCSS configuration
├── README.md              # Project documentation
├── tailwind.config.ts     # Tailwind CSS configuration
├── theme.json             # Application theming
├── tsconfig.json          # TypeScript configuration
└── vite.config.ts         # Vite bundler configuration
```