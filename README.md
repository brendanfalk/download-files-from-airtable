# Download Files from Airtable

⛔️ Warning: This documentation isn't 100% correct you will have to read the code before using this⛔️

Get all this information from Airtable's API docs
```
git clone https://github.com/falky97/download-files-from-airtable.git airtable-download
cd airtable-download

npm install 

touch .env
mkdir out
touch out/out.txt

cat << EOF > .env
AIRTABLE_API_KEY=            # should start with key****
AIRTABLE_BASE_ID=            # should start with app****
#BASE_NAME=                   # database name (get this from airtable docs)
#VIEW_NAME=                   # specific view name in the base
#COLUMN_NAME=                 # the column you want to download data from
EOF

code .
open .env
```

Note, this currently only downloads the first file from a row

```
npm run get_urls
npm run download
```
