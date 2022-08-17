def lambda_handler(event, context):
    return {
        'statusCode': '200',
        'body': "1",
        'headers': {
            'Content-Type': 'application/json',
        },
    }

