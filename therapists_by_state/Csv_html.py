from prettytable import PrettyTable

import os

dir_path = os.path.dirname(os.path.realpath(__file__))
#print("directory path: " + dir_path)
csv_file = open(dir_path + '/md.csv', 'r')
csv_file = csv_file.readlines()

line_1 = csv_file[0]
line_1 = line_1.split(',')

x = PrettyTable([line_1[0], line_1[1], line_1[2]])

for i in range(1, len(csv_file)):
    lines = csv_file[i]
    lines = lines.split(',')

    for a in range(0,len(line_1)-2):
        x.add_row([lines[a], lines[a+1], lines[a+2]])
        a += 2
    print(lines)

html_code = x.get_html_string()
html_file = open('md.html', 'w')
html_file = html_file.write(html_code)


f = open('md.html', 'r')
contents = f.readlines()
f.close()
contents.insert(2, """<style>
        @import url(https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap);
        table {
            font-family: 'Source Sans Pro', sans-serif;
            border-collapse: collapse;
            width: 100%
            
        }
        th {
            text-align: center;
            background-color: #29C9BF;
            color: white;
        }
        th, td {
            height: 50px;
            padding: 15px;
            border-bottom: 1px solid #ddd;
            
        }
        tr:hover {
            background-color: gainsboro;
        }
        tr:nth-child(odd) {
            background-color: #f2f2f2;
        }
        </style>""")
f = open('table.html', 'w')
contents = "".join(contents)
f.write(contents)
f.close()

