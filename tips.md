- Every Next.js page file that needs to show translated text must have the `getStaticProps` function

export async function getStaticProps({ locale }) {
return {
props: {
...(await serverSideTranslations(locale ?? 'en', ['common'])),
},
revalidate: 1, // Use ISR to update the cached pages
}
}

- Any component that needs access to translated strings (text) must call the `useTranslation` hook, and grab the `t` function from the object returned by calling this hook

const { t } = useTranslation('common')

- This 'common' thing is called a namespace, you can have one or more. It's used to organize all this translated text if you have a shit ton of it. You don't have to do this, but you can.
- You must pass this namespace to `serverSideTranslations` and `useTranslation` — you can pass multiple namespaces in an array also

- To get and render actual translated text you use this `t` function you got from `useTranslation`. If in your namespace file (for example `adomis-project/public/locales/en/common.json`) you have a key like 'lea' with a simple string value like 'Lea is cool' then you can get this translated text like:
  example from common.json:
  "lea": "Lea is cool.",
  t('lea')

- If inside your namespace file (for example common.json) you want to organize your translated text more, for example a bunch of strings inside a 'footer' object, then you need to specify what you want from inside that footer object like this:
  example from common.json:
  "footer": {
  "description": "Footer content goes here"
  },
  t('footer.description')
