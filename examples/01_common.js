var x = 0;

if (x > 0) {
    console.log('Something gone wrong');
}

var array = [];

for (var i=0;i<array.length;i++) {
    console.log('Something gone wrong');
}

var y = 0;

while (true) {
    console.log('an endless loop');

    y++;

    if (y > 10) {
        console.log('wait! not endless');
        break;
    }
}

try {
    throw new Error('this is intentional!');
} catch(err) {
    console.log(err);
}

