# GitHub Par Push Karne Ke Steps

## Method 1: Personal Access Token (Recommended)

### Step 1: GitHub par repo banayein (Browser se)
1. https://github.com/new par jayein
2. Repository name: `ai-robotics-initiative` (ya jo naam chahiye)
3. Description: `Student-led AI × Robotics Initiative website for Ajeenkya DY Patil University`
4. Public ya Private select karein
5. **Initialize repository options ko UNCHECK rakhein** (README, .gitignore, license - kuch nahi add karein)
6. "Create repository" button click karein

### Step 2: Personal Access Token banayein
1. GitHub par Settings > Developer settings > Personal access tokens > Tokens (classic) par jayein
   Direct link: https://github.com/settings/tokens
2. "Generate new token" > "Generate new token (classic)" click karein
3. Note: "Push to repositories" likh dein
4. Expiration: 30 days ya jo chahiye
5. Scopes: Sirf **"repo"** checkbox select karein (full control of private repositories)
6. Niche "Generate token" button click karein
7. **Token copy kar lein** (yeh sirf ek baar dikhai dega!)
   Format: `ghp_xxxxxxxxxxxxxxxxxxxx`

### Step 3: Terminal mein commands run karein

```bash
# 1. Remote add karein (apna username aur repo name dalein)
git remote add origin https://github.com/YOUR_USERNAME/ai-robotics-initiative.git

# 2. Branch name check karein
git branch

# 3. Push karein (token mangega)
git push -u origin main
```

**Jab Username aur Password mangega:**
- Username: Apna GitHub username
- Password: Token paste karein (jo abhi copy kiya)

---

## Method 2: GitHub Desktop (GUI)

Agar command line se issue hai:

1. GitHub Desktop download karein: https://desktop.github.com/
2. Install karein aur GitHub account se login karein
3. File > Add Local Repository
4. Apna project folder select karein
5. "Publish repository" button click karein
6. Repo name aur description add karein
7. Push button click karein

---

## Method 3: Repo manually bana kar commands

1. Browser se https://github.com/new par repo banayein
2. Niche diye commands terminal mein run karein (apne details se replace karein)

**Commands ready hain - bas apna username aur token dalein:**

```bash
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git push -u origin main
```

---

## Troubleshooting

**Agar "main" branch nahi hai:**
```bash
git branch -M main
git push -u origin main
```

**Agar remote already exist error:**
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git push -u origin main
```

**Token save karna (next time na mangne ke liye):**
```bash
git config --global credential.helper store
```

---

## Aapka Code Ready Hai!

Bas:
1. GitHub par repo banayein (browser se)
2. Token generate karein
3. Commands run karein (apna username/token dalein)

Mujhe batayein ki aap kis method se karna chahte hain!
