import { Controller, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Post('upload-image')
    async getImageResults() {
        // Upload image to s3
        // Store image key inside database
        // Send image stream to reptile
        // Return response from reptile
        return [
            'A thorough skin examination to determine the cause of the redness and inflammation.',
            'A topical cream or ointment containing hydrocortisone, a steroid medication, to reduce inflammation and redness.',
            'A topical antibiotic cream or ointment to treat any bacterial infection that may be present.',
            'Avoiding any triggers that may be causing the redness and inflammation, such as certain cosmetics or environmental factors.',
            'Avoiding excessive sun exposure, as sunlight can worsen the condition.',
            'Avoiding alcohol and smoking, as they can worsen the condition.',
            'Avoiding stress, as stress can worsen the condition.',
        ]
    }
}
