def bit_stuffing(data):
    stuffed = ''
    count = 0
    for bit in data:
        if bit == '1':
            count += 1
            stuffed += bit
            if count == 5:
                stuffefd += '0'  # Stuff a 0 after five 1s
                count = 0
        else:
            stuffed += bit
            count = 0
    return stuffed

# Example
data = "011111101111110"
stuffed_data = bit_stuffing(data)
print("Stuffed Data:", stuffed_data)
