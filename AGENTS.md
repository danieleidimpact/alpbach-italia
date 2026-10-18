# Project conventions
- Keep shared site branding in SiteHeader and SiteFooter, with semantic palette tokens in src/styles.css, so all pages remain consistent.
- Reference uploaded media through Lovable Assets JSON pointers; generated media may be imported directly, so binaries supplied by users do not enlarge the repository.
- Apply the home photo color treatment only through the home-alpine-photo class, so other pages retain their original photography.