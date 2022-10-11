const int32_to_ipv4 = (int32) => {
    return (
        ((int32 >> 24) & 0xFF) + "." +
        ((int32 >> 16) & 0xFF) + "." +
        ((int32 >> 8) & 0xFF) + "." +
        ((int32 >> 0) & 0xFF)
    );
}

console.log(`2149583361 => ${int32_to_ipv4(2149583361)}`);
console.log(`32 => ${int32_to_ipv4(32)}`);
console.log(`0 => ${int32_to_ipv4(0)}`);