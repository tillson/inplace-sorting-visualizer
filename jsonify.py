import json

data = {}

lines = open('src/data.json').read().split('\n')
for line in lines:
    if len(line) == 0:
        continue
    print line
    string = line.split('=')[1].split('#')[0]
    testDesc = line.split('#')[1].split('*')[0]
    initial = line.split('*')[1]
    testId = testDesc.split(' - ')[0][-3:]
    data[testId] = {
        "initial": initial,
        "desc": testDesc,
        "string": string
    }

open('src/data.json', 'w').write(json.dumps(data))