# list-emissions

> Motive: List down the emissions after reading the excel file

# Stack

1. React
2. Material UI
3. Tailwind
4. Material UI Icons
6. read-excel-file - To read excel files

# Points to create repo
- Used web worker to load the file in order to avoid blocking main thread.
- Files which are not xlsx will throw an error
- could not find out `type of purchase` column so added amount in that column
- didn't customize much on Material Table so sorting, filtering will not work.
- Progress bar is used but it is not visible for the long time as file is loading the data very fastly, also to show the percentage of bar I need progress event to capture it, but it not exposed
through library so I have used normal loading bar.
# Usage

>> npm i && npm start